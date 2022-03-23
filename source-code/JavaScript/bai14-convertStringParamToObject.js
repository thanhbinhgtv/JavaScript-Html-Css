// Chuyển URL String Param thành Object trong ReactJs :
import queryString from 'query-string';
import { useLocation, useHistory } from 'react-router-dom';
import { useSelector } from 'react-redux';

const history = useHistory();
const location = useLocation();

const params = queryString.parse(location.search);

console.log(location); // {pathname: '/signup', search: '?companyId=61c5a55458b9760020c48b0e&firstName=Binh…nhbinhgtv@gmail.com&type=61c5a55658b9760020c48b13', hash: '', state: undefined}
console.log(params);   // {companyId: '61c5a55458b9760020c48b0e', email: 'thanhbinhgtv@gmail.com', firstName: 'Binh', surName: 'pt', type: '61c5a55658b9760020c48b13'}

const rulesReducer = useSelector(state => state.rulesReducer);  // Lấy Data Reducer nhanh mà không mapStateToProps

const { location: { search } } = history;   // ????

// <div className={[class1, class2, class3]}></div> : Multiple Class (Test lai)
// <div className={`${s.companyButtonContainer} ${s.roleButton} ${s.ruleName} mr-3`}></div> : Multiple Class

// -----------------------------

console.log(response); //String : {"responsibilities":"Driver","companyId":"6232ee4ccf57a0002b610a3d","id":"6232ee4dcf57a0002b610a44"}
JSON.parse(response)   //Trở thành Object