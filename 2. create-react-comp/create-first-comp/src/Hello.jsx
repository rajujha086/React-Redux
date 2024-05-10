

function Hello() {

  let myName = `Raju`;
  let number = 456;
  let fullName = () => {
    return 'Raju Jha';
  }

  return <p>
    {/* Hello this is the future speaking. I am your master {myName} */}
    Hello this is the future speaking. I am your master {fullName()}; <br />

    MessageNo. {number}.  I am your master {fullName()};

  </p>
}

export default Hello;