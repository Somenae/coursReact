export default class TaskFetcher {
    static url = "http://localhost:3000/tasks";

    static loadTasks() {
        return fetch(this.url)
            .then((response) => {
                if (response.status === 200) {
                    return response.json();
                } else {
                    throw new Error("Le serveur n'a pas répondu correctement, erreur : " + response.status)
                }
            })
            .then((tasks) => {
                return tasks;
            })
            .catch(error => {
                console.error("Erreur attrapée dans loadTasks " + error)
            })
    }

    /**
     * 
     * @param {number} taskId
     * @param {Object} propertyToPatch
     */
    static patchTask(taskId, propertyToPatch) {
        return fetch(`${this.url}/${taskId}`,
        {
          headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
          },
          method: "PATCH",
          //body: JSON.stringify({ "title": "Simon", "author": "Yvan" })
          body: JSON.stringify(propertyToPatch)
        })
        .then(function (res) {
            if (res.status === 200) {
                console.log("La modification s'est bien passée")
            } else {
                throw new Error("Problème serveur lors du patch. Statut: " + res.status)
            }
        })
        .catch(error => {
            console.error(`Erreur attrapée :`, error);
            throw new Error(error);
        })
        
    }

    /**
     * Permet de supprimer une tâche
     * @param {number} taskId
     */
    static deleteTask(taskId) {
        return fetch(`${this.url}/${taskId}5`,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            },
            method: "DELETE",
        })
        .then(function (res) {
            if (res.status === 200) {
                console.log("La suppression s'est bien passée")
            } else {
                throw new Error("Problème serveur lors du delete. Statut: " + res.status)
            }
        })
    }
}