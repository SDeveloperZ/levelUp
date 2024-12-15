import React from 'react';
import {
  IonContent,
  IonPage,
  IonButton,
  IonText,
} from '@ionic/react';

interface LoginProps {
  onNavigateToRegister: () => void;
  onNavigateToLoginForm: () => void;
}

export const Login: React.FC<LoginProps> = ({
  onNavigateToRegister,
  onNavigateToLoginForm,
}) => {
  return (
    <IonPage>
      <IonContent className="ion-padding">
        <div className="flex flex-col items-center h-full">
          <div className="w-32 h-32 rounded-full bg-gray-200 mb-4 mt-12" />
          
          <IonText className="text-xl font-semibold mb-2">
            Lorem ipsum
          </IonText>
          
          <IonText className="text-center text-gray-600 mb-8 px-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Aliquam in hendrerit urna. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </IonText>

          <div className="w-full px-6 space-y-3">
            <IonButton expand="block" onClick={onNavigateToLoginForm}>
              Iniciar Sesión
            </IonButton>
            
            <IonButton expand="block" fill="outline">
              Inicio Sesión SSO
            </IonButton>
            
            <IonButton 
              expand="block" 
              fill="clear" 
              onClick={onNavigateToRegister}
            >
              Crear cuenta
            </IonButton>
          </div>

          <div className="mt-auto mb-8 px-6 text-center text-sm text-gray-600">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut et massa mi. Pellentesque sit amet sapien fringilla, mattis ligula consectetur, ultrices mauris. Maecenas vitae mattis tellus.
          </div>
        </div>
      </IonContent>
    </IonPage>
  );
};

