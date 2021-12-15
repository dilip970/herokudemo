const globalNames = 
{

  APIURL:'http://128.199.28.150:5000/api',
  // APIURL : 'http://127.0.0.1:5000/api',
  RAWURL : 'http://128.199.28.150:5000',
  superadminlogout : function logout(e){
        e.preventDefault();
        localStorage.clear();
        window.location.href='/superadmin/login';
  },
  USERFILES : 'http://128.199.28.150:5000/userfiles/',
  BLOGFILES : 'http://128.199.28.150:5000/blog-files/',
  PHARMACYFILES : 'http://128.199.28.150:5000/pharmacy-files/',
  DIAGNOSTICSFILES : 'http://128.199.28.150:5000/lab-tests/',
  
}
export default globalNames;