from referrals.models import Referral
from referrals.serializers import ReferralSerializer
from rest_framework import viewsets

class ReferralViewSet(viewsets.ModelViewSet):
  queryset = Referral.objects.all()
  serializer_class = ReferralSerializer