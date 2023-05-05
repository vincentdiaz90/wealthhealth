# npm plugin : modal

## Description

This plugin is for the project 14 from OpenClassrooms formation "javaScript/React developer".

```cmd
npm i npm-modal-v
```

## How to use ?

1. Import the plugin in your project like this :

```javascript
import { ModalCreateEmployee } from 'npm-modal-v'
```

2. The state :

```javascript
const [modalReset, setModalReset] = useState(false)
const [displayModal, setDisplayModal] = useState(false)
```

3. In the return :

```javascript
<ModalCreateEmployee
    key={modalReset}
    id="modal-created"
    showModal={displayModal}
    closeModal={() => setDisplayModal(false)}
    response="Employee Created !"
/>
```

### We put props into this component from the current page where you use this npm plugin

#### key allow to reset the object employee where the previous employee was create (UI-UX best practice) / showModal-closeModal Allow to see or not the modale / response show a text (here the success of the an employee's creation)

## Personalize

1. Put this into your component :

```javascript
const modalParameter = {
    backgroundColor: '#f1f1f1',
    borderRadius: 10 + 'px',
    color: '#222',
    fontSize: 22 + 'px',
    padding: '20px 50px',
}
```

