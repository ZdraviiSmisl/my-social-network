import Heading from "./Heading";

const Userinfo = ({user}) => {
  const {firstName, lastName, age, gender, email, phone, address} = user || {};

  /*
    Object.keys(address);
    if (key == "address") {
      delete Object.assign(address, {["fullAddress"]: address["address"]})["address"]
    }
  */

  const {city, postalCode, state, fullAddress} = address || {};

  if (!user) {
    return <Heading tag='h3' text="One day here will be a new component"/>
  }

  return (
    <>
      <Heading tag="h3" text={`${firstName} ${lastName}`}/>
      <p>
        <strong>Age:</strong> <span>{age}</span>
      </p>
      <p>
        <strong>Gender:</strong> <span>{gender}</span>
      </p>
      <p>
        <strong>email:</strong> <span>{email}</span>
      </p>
      <p>
        <strong>phone:</strong> <span>{phone}</span>
      </p>
      <p>
        <strong>Address:</strong> <span>{`${city} ${postalCode} ${state} ${address["address"]}`}</span>
      </p>

    </>
  )
}

export default Userinfo;
