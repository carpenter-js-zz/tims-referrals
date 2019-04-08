fimport json 
from django.test import TestCase, Client
from rest_framework.test import APITestCase
from django.urls import reverse
from .views import ReferralViewSet
from .models import Referral
from .serializers import ReferralSerializer


class ReferralsListAPIViewTestCase(APITestCase):

  def setUp(self):
    self.client = Client()
    self.referral = Referral.objects.create(title='test')
    self.url = reverse('referrals-list')

  def test_create_referral(self):
    
    response = self.client.post(self.url, { "title": "test" } )
    self.assertEqual(response.status_code, 201)

  def test_get_referrals(self):
    """
    Test to verify referal list
    """
    response = self.client.get(self.url)
    self.assertEqual(response.status_code, 200)


class ReferralDetailAPIViewTestCase(APITestCase):

  def setUp(self):
    self.client = Client()
    self.referral = Referral.objects.create(title='test')
    self.url = reverse('referrals-detail', kwargs={'pk': self.referral.pk})

  def test_referral_object_bundle(self):
    """
    Test to verify referal object bundle
    """
    response = self.client.get(self.url)
    self.assertEqual(response.status_code, 200)
    response_data = json.loads(response.content)

    referral_serializer_data = ReferralSerializer(instance=self.referral).data
    self.assertEqual(referral_serializer_data, response_data)

  def test_valid_referal_update(self):
  
    response = self.client.put(
      self.url, 
      {'title':'update', 'click_count': '1'}, 
      content_type='application/json'
    )
    response_data = json.loads(response.content)
    referral = Referral.objects.get(id=self.referral.id)

    self.assertEqual(response.status_code, 200)
    self.assertEqual(response_data.get('title'), referral.title)
    self.assertEqual(response_data.get('click_count'), referral.click_count)

  def test_invalid_title_referral_update(self):

    response = self.client.put(
      self.url, 
      {'title':''}, 
      content_type='application/json'
    )

    self.assertEquals(response.status_code, 400)
  
  def test_invalid_click_count_referral_update(self):

    response = self.client.put(
      self.url, 
      {'click_count':'one'}, 
      content_type='application/json'
    )


