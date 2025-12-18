const Deacon = (props) => {
  return (
    <div>
      <td className={"Event " + props.color}>
        {props.name}
        <br />
        Contact Number: {props.number}
      </td>
    </div>
  );
};
export default Deacon;
