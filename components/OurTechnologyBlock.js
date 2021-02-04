function OurTechnologyBlock(props) {
  return (
    <div className='row'>
      <div className={`col-4 offset-${props.offset}`}>
        <h2>{props.title}</h2>
        <p>{props.content}</p>
      </div>
    </div>
  );
}

export default OurTechnologyBlock;
