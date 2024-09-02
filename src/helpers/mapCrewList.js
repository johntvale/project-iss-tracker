import CrewMemberCard from '../components/Sections/Crew/CrewMemberCard';

export function mapList(receivedList) {
  const onlyIssCrew = receivedList.filter(person => person.iss);
  const map = onlyIssCrew.map((personObject) => {
    const { id, image, name, country, flag_code, position, spacecraft, url } = personObject;
    return (
      <CrewMemberCard
        key={id}
        image={image}
        name={name}
        country={country}
        flagCode={flag_code}
        position={position}
        spacecraft={spacecraft}
        url={url}
      />
    );
  });
  return map;
}
