import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonInput,
  IonText,
} from '@ionic/react';
import type { AuthFormData } from '@/types/index';

interface LoginFormProps {
  onLogin: (data: AuthFormData) => void;
  onCancel: () => void;
}

export const LoginForm: React.FC<LoginFormProps> = ({ onLogin, onCancel }) => {
  const [formData, setFormData] = useState<AuthFormData>({
    email: '',
    password: '',
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(formData);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center h-full">
          <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 mt-12" />
          
          <IonText className="text-xl font-semibold mb-8">
            Lorem ipsum
          </IonText>

          <form onSubmit={handleSubmit} className="w-full space-y-4">
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

            <div className="space-y-3">
              <IonButton expand="block" type="submit" className="h-12">
                Iniciar Sesión
              </IonButton>
              
              <IonButton expand="block" fill="outline" onClick={onCancel} className="h-12">
                Cancelar
              </IonButton>
            </div>
          </form>

          <div className="mt-auto mb-8 px-6 text-center text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

