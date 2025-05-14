import os 
from django.conf import settings
from django.conf.urls.static import static
from django.urls import include
from django.contrib import admin
from django.urls import path

urlpatterns = [
    path('admin/', admin.site.urls),
    path('', include('core.urls')),
]


urlpatterns_apps = [
    path('', include('core.urls')),
    
]


urlpatterns += urlpatterns_apps
if settings.DEBUG:
    urlpatterns += static(settings.MEDIA_URL, document_root=settings.MEDIA_ROOT)
    urlpatterns += static(settings.STATIC_URL, document_root=settings.STATIC_ROOT)