import { useState } from "react"
import { IonContent, IonPage, IonCard, IonCardHeader, IonCardTitle, IonCardContent, IonButton, IonInput, IonLabel, IonItem, IonSelect, IonSelectOption, IonList } from '@ionic/react'

export function GoalManagement({ user }) {
  const [goals, setGoals] = useState([
    { id: 1, title: "Run 5km", category: "Fitness", type: "daily" },
    { id: 2, title: "Read 2 books", category: "Education", type: "monthly" },
  ])

  const [newGoal, setNewGoal] = useState({ title: "", category: "", type: "daily" })

  const addGoal = () => {
    if (newGoal.title && newGoal.category) {
      setGoals([...goals, { ...newGoal, id: Date.now() }])
      setNewGoal({ title: "", category: "", type: "daily" })
    }
  }

  return (
    <IonPage>
      <IonContent>
        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Add New Goal</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonItem>
              <IonLabel position="floating">Title</IonLabel>
              <IonInput
                value={newGoal.title}
                onIonChange={(e) => setNewGoal({ ...newGoal, title: e.detail.value })}
              />
            </IonItem>
            <IonItem>
              <IonLabel position="floating">Category</IonLabel>
              <IonInput
                value={newGoal.category}
                onIonChange={(e) => setNewGoal({ ...newGoal, category: e.detail.value })}
              />
            </IonItem>
            <IonItem>
              <IonLabel>Type</IonLabel>
              <IonSelect
                value={newGoal.type}
                onIonChange={(e) => setNewGoal({ ...newGoal, type: e.detail.value })}
              >
                <IonSelectOption value="daily">Daily</IonSelectOption>
                <IonSelectOption value="monthly">Monthly</IonSelectOption>
              </IonSelect>
            </IonItem>
            <IonButton expand="block" onClick={addGoal} className="mt-4">
              Add Goal
            </IonButton>
          </IonCardContent>
        </IonCard>

        <IonCard>
          <IonCardHeader>
            <IonCardTitle>Your Goals</IonCardTitle>
          </IonCardHeader>
          <IonCardContent>
            <IonList>
              {goals.map((goal) => (
                <IonItem key={goal.id}>
                  <IonLabel>
                    <h2>{goal.title}</h2>
                    <p>{goal.category} - {goal.type}</p>
                  </IonLabel>
                </IonItem>
              ))}
            </IonList>
          </IonCardContent>
        </IonCard>
      </IonContent>
    </IonPage>
  )
}

