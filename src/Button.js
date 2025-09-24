import'./Button.css';

function Button({ text }) {
  return <button className="btn btn-warning mt-2">{text}</button>;
}

export default Button;