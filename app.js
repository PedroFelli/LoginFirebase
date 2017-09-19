(function() {


  // Initialize Firebase
  var config = {
    apiKey: "AIzaSyCnb1-6ifibViQZp_K0y3qhrdDrIZvGTKE",
    authDomain: "gladiatorapp-627ea.firebaseapp.com",
    databaseURL: "https://gladiatorapp-627ea.firebaseio.com",
    projectId: "gladiatorapp-627ea",
    storageBucket: "gladiatorapp-627ea.appspot.com",
    messagingSenderId: "901467024091"
  };
  firebase.initializeApp(config);


  //get elements
  const txtEmail = document.getElementById('txtEmail');
  const txtPassword = document.getElementById('txtPassword');
  const btnLogin = document.getElementById('btnLogin');
  const btnSignUp = document.getElementById('btnSignUp');
  const btnLogout = document.getElementById('btnLogout');
  const mainDiv = document.getElementById('mainDiv');

  // add login event

btnLogin.addEventListener('click', e => {
  //get email and pass
  const email = txtEmail.value;
  const pass  = txtPassword.value;
  const auth = firebase.auth();
  //sing in
  const promise = auth.signInWithEmailAndPassword(email, pass);
  promise.catch (e => window.alert(e.message));
});

  // add signup event
  btnSignUp.addEventListener('click', e => {
  //get email and pass
  const email = txtEmail.value;
  const pass  = txtPassword.value;
  const auth = firebase.auth();
  //sing in
  const promise = auth.createUserWithEmailAndPassword(email, pass);
  promise.catch (e => window.alert(e.message));
  });

  btnLogout.addEventListener('click', e => {
    firebase.auth().signOut();
  });


  firebase.auth().onAuthStateChanged(firebaseUser => {
    if(firebaseUser){
      
      console.log(firebaseUser);
      //window.location.href = "index.html";
      btnLogout.classList.remove('hide');
 

    } else {
      console.log('not logged in');
      
      btnLogout.classList.add('hide');
    }
  });


}());
