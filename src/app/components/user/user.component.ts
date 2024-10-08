import {Component, computed, EventEmitter, input, Input, output, Output, signal} from '@angular/core';
import {DUMMY_USERS} from "../../dummy-users";
import {User} from "../../models/User";
import {CardComponent} from "../../shared/card/card.component";

//const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);

@Component({
  selector: 'app-user',
  standalone: true,
  imports: [
    CardComponent
  ],
  templateUrl: './user.component.html',
  styleUrl: './user.component.css'
})
export class UserComponent {

  // ------------ this an input for the component that we can use in the html balise of the component with the Input decorator--------------------
  //@Input({required:true}) id!: string;
  //@Input({required:true}) avatar!: string; // we use ! to tell angular that we don't need to initialise this because it is gonna be initialized outside this component (by the app component)
  //@Input({required:true}) name!: string; // same here to avoid this error (Property 'name' has no initializer and is not definitely assigned in the constructor.)
  @Input({required:true}) user!: User;
  @Input({required:true}) selected!: boolean;
  /*
  // ------------- this is an input also but we use the input function this a function to say that input is a signal ---------------
  avatarSignal = input.required<string>();
  nameSignal = input.required<string>();
  imagePathSignal= computed(() => 'assets/users/' + this.avatar())
  */

  // ------------- this is an output with the Output decorator --------------------
   @Output() select = new EventEmitter<string>(); // the type here it is not required but it is beneficial to add it to make sure that we accept only string object

   // ------------- this is an output with the output function --------------------
  //select = output<string>();
  get imagePath(){
    return 'assets/users/' + this.user.avatar
  }
  onSelectUser() {
    this.select.emit(this.user.id);

  }


  // ----------- this is for a static component that not being reused ------------------
  /*
  selectedUser = signal( DUMMY_USERS[randomIndex]);
  imagePath= computed(() => 'assets/users/' + this.selectedUser().avatar)



  onSelectUser(){
    const randomIndex = Math.floor(Math.random() * DUMMY_USERS.length);
    this.selectedUser.set(DUMMY_USERS[randomIndex])
    //this.selectedUser =  DUMMY_USERS[randomIndex];
  }
  */
}
