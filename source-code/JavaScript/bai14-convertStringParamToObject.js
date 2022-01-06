// Chuyển URL String Param thành Object trong ReactJs :
import queryString from 'query-string';
import { useLocation } from 'react-router-dom';

const location = useLocation();
const params = queryString.parse(location.search);

console.log(location); // {pathname: '/signup', search: '?companyId=61c5a55458b9760020c48b0e&firstName=Binh…nhbinhgtv@gmail.com&type=61c5a55658b9760020c48b13', hash: '', state: undefined}
console.log(params);   // {companyId: '61c5a55458b9760020c48b0e', email: 'thanhbinhgtv@gmail.com', firstName: 'Binh', surName: 'pt', type: '61c5a55658b9760020c48b13'}