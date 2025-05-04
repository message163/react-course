import { Outlet,useNavigation } from 'react-router';
export default function Content() {
    const navigation = useNavigation();
    const isLoading = navigation.state === 'loading';
    console.log(navigation.state);
    return isLoading ? <div>Loading...</div> : <div>    
        <Outlet />
    </div>
}

