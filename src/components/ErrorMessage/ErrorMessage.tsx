import { ErrorMessageProps} from "./ErrorMessage.types"
const ErrorMessage: React.FC<ErrorMessageProps> = ({ message }) => {
  return <p>{message}</p>;
};

export default ErrorMessage;
