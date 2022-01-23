import { MyContext } from "./MyContext";

export const FourthComponent = () => {
    return (
        <MyContext.Consumer>
            {value => 
                <div>
                    <h1>Četvrti naslov</h1>
                </div>
            }
        </MyContext.Consumer>
    );
}