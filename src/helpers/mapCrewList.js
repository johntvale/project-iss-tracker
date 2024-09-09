import CrewMemberCard from '../components/Sections/Crew/CrewMemberCard';

export function mapList(issCrew) {
  const map = issCrew.map((personObject) => {
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
