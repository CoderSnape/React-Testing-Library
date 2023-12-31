import { render, screen } from '@testing-library/react';
import FollowersList from '../FollowersList';
import { BrowserRouter } from 'react-router-dom';

const MockFollowersList=()=>{
    return(
            <BrowserRouter>
                <FollowersList/>
            </BrowserRouter>
            )
}

describe('FollowersList',()=>{

    it('it should render todo',async ()=>{
        render ( <MockFollowersList />);
        const followerDivElement = await screen.findByTestId("follower-item-0")
        expect(followerDivElement).toBeInTheDocument()
    });

})
