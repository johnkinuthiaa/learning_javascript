export default function logOut(){
    localStorage.removeItem("token")
    localStorage.removeItem("role")
}