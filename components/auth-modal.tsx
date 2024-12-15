import { useState } from "react"
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonButton, IonInput, IonItem, IonLabel } from '@ionic/react'

export function AuthModal({ onLogin, onClose }) {
  const [isLogin, setIsLogin] = useState(true)
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const handleSubmit = (e) => {
    e.preventDefault()
    // Implement actual authentication logic here
    onLogin({ email })
  }

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
      <IonCard className="w-96">
        <IonCardHeader>
          <IonCardTitle>{isLogin ? "Login" : "Register"}</IonCardTitle>
        </IonCardHeader>
        <IonCardContent>
          <form onSubmit={handleSubmit}>
            <IonItem>
              <IonLabel position="floating">Email</IonLabel>
              <IonInput
                type="email"
                value={email}
                onIonChange={(e) => setEmail(e.detail.value)}
                required
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Password</IonLabel>
              <IonInput
                type="password"
                value={password}
                onIonChange={(e) => setPassword(e.detail.value)}
                required
              />
            </IonItem>
            <IonButton expand="block" type="submit" className="mt-4">
              {isLogin ? "Login" : "Register"}
            </IonButton>
          </form>
          <p className="mt-4 text-center">
            {isLogin ? "Don't have an account?" : "Already have an account?"}
            <IonButton fill="clear" onClick={() => setIsLogin(!isLogin)}>
              {isLogin ? "Register" : "Login"}
            </IonButton>
          </p>
        </IonCardContent>
      </IonCard>
    </div>
  )
}

