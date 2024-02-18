import "./App.css";
import { FoodCard } from "./components/foodCard";

function App() {
    return (
        <div className="">
            <div className="flex justify-center">
                <p className="text-yellow-400 text-xl font-bold my-6">
                    โหวดอาหาร
                </p>
            </div>
            <FoodCard title="อาหารคาว" name="ข้าวผัด" img="https://softwarestudio.s3.ap-southeast-1.amazonaws.com/exercise-05/khaopad.jpg" />
            <FoodCard title="อาหารหวาน" name="บัวลอย" img="https://softwarestudio.s3.ap-southeast-1.amazonaws.com/exercise-05/bualoy.jpg" />
        </div>
    );
}

export default App;
