//app/ii/page.tsx
import axios from 'axios'
const session = null
const wait = (ms:number) => new Promise((resolve) => setTimeout(resolve,ms))

const page = async() =>{
    await wait(2000)
    // const {data } = await axios.get('')
    // return(<div>123123</div>)
    // if (!session)  throw new AuthRequeireError()
    return <div>{JSON.stringify({'name':'john'})}</div>
}


export default page