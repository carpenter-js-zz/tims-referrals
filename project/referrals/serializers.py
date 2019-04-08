from rest_framework import serializers
from referrals.models import Referral

class ReferralSerializer(serializers.ModelSerializer):
  class Meta:
    model = Referral
    fields = ('id', 'title', 'click_count')