import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonText,
  IonCheckbox,
  IonIcon,
  IonHeader,
  IonToolbar,
  IonTitle,
} from '@ionic/react';
import { close } from 'ionicons/icons';
import type { AuthFormData } from '@/types/index';

interface RegisterProps {
  onClose: () => void;
  onRegister: (data: AuthFormData) => void;
}

export const Register: React.FC<RegisterProps> = ({ onClose, onRegister }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    name: '',
    email: '',
    password: '',
  });
  const [acceptTerms, setAcceptTerms] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (acceptTerms) {
      onRegister(formData);
    }
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar className="px-4">
          <IonTitle size="small">Nombre APP</IonTitle>
          <IonButton slot="end" fill="clear" onClick={onClose}>
            <IonIcon icon={close} />
          </IonButton>
        </IonToolbar>
      </IonHeader>

      <IonContent className="ion-padding">
        <div className="space-y-6">
          <h2 className="text-xl font-semibold">Crear Cuenta</h2>

          <IonText className="text-gray-600 block">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </IonText>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="space-y-1">
              <IonText className="text-sm">Nombre</IonText>
              <div className="bg-gray-100 rounded-md">
                <IonInput
                  value={formData.name}
                  onIonChange={e => setFormData({...formData, name: e.detail.value!})}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-1">
              <IonText className="text-sm">Email</IonText>
              <div className="bg-gray-100 rounded-md">
                <IonInput
                  type="email"
                  value={formData.email}
                  onIonChange={e => setFormData({...formData, email: e.detail.value!})}
                  className="h-12"
                />
              </div>
            </div>

            <div className="space-y-1">
              <IonText className="text-sm">Contraseña</IonText>
              <div className="bg-gray-100 rounded-md">
                <IonInput
                  type="password"
                  value={formData.password}
                  onIonChange={e => setFormData({...formData, password: e.detail.value!})}
                  className="h-12"
                />
              </div>
            </div>

            <div className="flex items-start gap-2">
              <IonCheckbox
                checked={acceptTerms}
                onIonChange={e => setAcceptTerms(e.detail.checked)}
              />
              <IonText className="text-sm">
                Lorem ipsum dolor sit amet <span className="text-blue-500">consectetur</span> adipisicing elit. Ut et massa mi. Aliquam in hendrerit urna.
              </IonText>
            </div>

            <IonButton 
              expand="block" 
              type="submit" 
              disabled={!acceptTerms}
              className="h-12"
            >
              Crear cuenta
            </IonButton>
          </form>
        </div>
      </IonContent>
    </IonPage>
  );
};

