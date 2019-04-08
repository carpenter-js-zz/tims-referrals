release: cd project/ && python manage.py migrate && python manage.py loaddata referrals

web: cd project/ && gunicorn project.wsgi
