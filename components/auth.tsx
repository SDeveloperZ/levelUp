import React, { useState } from 'react';
import {
  IonContent,
  IonPage,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonItem,
  IonLabel,
  IonInput,
  IonButton,
  IonSegment,
  IonSegmentButton,
} from '@ionic/react';

export const Auth: React.FC<{ onLogin: (email: string) => void }> = ({ onLogin }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onLogin(email);
  };

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <IonCard>
          <IonCardHeader>
            <IonCardTitle className="ion-text-center">
              {isLogin ? 'Login' : 'Register'}
            </IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonSegment value={isLogin ? 'login' : 'register'} onIonChange={e => setIsLogin(e.detail.value === 'login')}>
              <IonSegmentButton value="login">
                <IonLabel>Login</IonLabel>
              </IonSegmentButton>
              <IonSegmentButton value="register">
                <IonLabel>Register</IonLabel>
              </IonSegmentButton>
            </IonSegment>
            <form onSubmit={handleSubmit} className="ion-padding-top">
              <IonItem>
                <IonLabel position="floating">Email</IonLabel>
                <IonInput type="email" value={email} onIonChange={e => setEmail(e.detail.value!)} required />
              </IonItem>
              <IonItem>
                <IonLabel position="floating">Password</IonLabel>
                <IonInput type="password" value={password} onIonChange={e => setPassword(e.detail.value!)} required />
              </IonItem>
              <IonButton expand="block" type="submit" className="ion-margin-top">
                {isLogin ? 'Login' : 'Register'}
              </IonButton>
            </form>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  );
};

