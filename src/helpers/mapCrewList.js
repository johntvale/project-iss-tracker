import CrewMemberCard from '../components/Sections/Crew/CrewMemberCard';

export function mapList(receivedList) {
  const map = receivedList.map((personObject) => {
    const { id, image, name, country, position, spacecraft, url } = personObject;
    return (
      <CrewMemberCard
        key={id}
        image={image}
        name={name}
        country={country}
        position={position}
        spacecraft={spacecraft}
        url={url}
      />
    );
  });
  return map;
}
