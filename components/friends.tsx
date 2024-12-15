import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonProgressBar } from '@ionic/react'

export function Friends({ user }) {
  // Mock data - replace with actual data fetching
  const friends = [
    { id: 1, name: "Alice", progress: 0.8 },
    { id: 2, name: "Bob", progress: 0.6 },
    { id: 3, name: "Charlie", progress: 0.9 },
  ]

  return (
    <IonPage>
      <IonContent>
        {friends.map((friend) => (
          <IonCard key={friend.id}>
            <IonCardHeader>
              <IonCardTitle>{friend.name}</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
              <IonProgressBar value={friend.progress}></IonProgressBar>
              <p className="mt-2">Progress: {Math.round(friend.progress * 100)}%</p>
              <IonButton expand="block" className="mt-2">Send Encouragement</IonButton>
            </IonCardContent>
          </IonCard>
        ))}
      </IonContent>
    </IonPage>
  )
}

