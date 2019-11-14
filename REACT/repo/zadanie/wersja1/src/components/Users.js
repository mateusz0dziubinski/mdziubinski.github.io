import React from 'react';
import './Users.css';

class Users extends React.Component {

   /**
    * @param  {} props
    */
   constructor(props) {
      super(props);

      this.state = {
         isEmptyInput: false,
         inputVal: '',
         users: []
      }
   }
   

   /**
    * Metoda obsługująca event 'onInput' na elemencie input
    * Zmienia stan 'this.state.inputVal'
    * 
    * @name handleChange
    * @param  {} ev
    */
   handleChange = (ev) => {
      let val = ev.target.value;
      this.setState(prevVal => {
         return {
            inputVal: val
         }
      })
   }


   /**
    * Metoda obsługująca event 'onClick' na elemencie button
    * Zmienia tablicę użytkowników
    * 
    * @name buttonHandleClick
    */
   buttonHandleClick = () => {
      if(this.state.inputVal == '') {
         this.setState(prevVal => {
            return {
               isEmptyInput: true
            }
         });
         return;
      }
      this.setState(prevList => {
         return {
            users: prevList.users.concat(this.state.inputVal),
            isEmptyInput: false
         }
      });
      this.clearInput();
   }


   /**
    * Metoda czyszcząca element input po dodaniu nowego usera
    * 
    * @name clearInput
    */
   clearInput() {
      this.setState(prevVal => {
         return {
            inputVal: ''
         }
      })
   }

   render() {
      return (
         <div>
            {/* formularz */}
            <div className="form">

               {/* 
                  input do którego wklepujemy nowych użytkowników 
                  onChange - przy wystąpieniu tego zdarzenia wywoływana jest metoda odpowiedzialna za przechowanie wartości inputa
                  value - przypisując tu state.inputVal po zapisie bardzo łatwo będziemy mogli wyczyścić inputa
               */}
               <input onChange={this.handleChange} value={this.state.inputVal} />

               {/* button nasłuchuje clicka i zapisuje do tablicy state.users nowe imie */}
               <button onClick={this.buttonHandleClick}>Dodaj imie</button>
            </div>

            {/* 
               W React można wyświetlać elementy również warunkowo jak poniżej 
               W poniższym wyświetlam diva z komunikatem, jeśi state.isEmptyInput jest true.
               Rzuć okiem gdzie i kiedy ustawiam stan na false i true
            */}
            {(this.state.isEmptyInput == true) ? <div className="message">Niepoprawnie wypełniony formularz</div> : null}

            {/* 
               W React klasy również możemy dodawać warunkowo
               Poniżej - jeśli istnieje cokolwiek w tablicy state.users dodaj do diva klasę listing
            */}
            <div className={(this.state.users.length > 0) ? 'listing' : null}>
               <ul>
                  {/* https://developer.mozilla.org/pl/docs/Web/JavaScript/Referencje/Obiekty/Array/map */}
                  {/* https://pl.reactjs.org/docs/lists-and-keys.html */}
                  {this.state.users.map((user, index) => {
                     return <li key={index} className="listing__item">User o indexie {index} ::: {user}</li>
                  })}
               </ul>
            </div>
         </div>
      )
   }
}

export default Users;