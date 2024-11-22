type FacultyMemberProps = {
  name: string;
  title: string;
  office: string;
  phone: string;
  email: string;
  overrideRequests: boolean;
};

const FacultyMember: React.FC<FacultyMemberProps> = ({name, title, office, phone, email, overrideRequests}) => {
  return (
    <div className="w-48 pt-1 text-white">
      {overrideRequests && (
        <h3 className="text-lg font-semibold">Override requests:</h3>
      )}
      <h3 className="text-lg font-semibold">{name}</h3>
      <p className="text-sm leading-3 text-neutral-300">{title}</p>
      <ul className="pt-4 pb-1 border-b border-orange-500 leading-tight text-neutral-300">
        <li>Office: {office}</li>
        <li>Phone: {phone}</li>
        <li>
          Email Address: <span className="underline">{email}</span>
        </li>
      </ul>
    </div>
  );
};

export default FacultyMember;
