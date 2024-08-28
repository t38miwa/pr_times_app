import Link from "next/link";

const Question_3 = () => {
    return (
        <div className="question-container">
            <h1>業種についてより詳しく教えてください</h1>
            <select>
                <option>手芸品販売</option>
                <option>工芸品販売</option>
                <option>雑貨店</option>
            </select>

            <div className="next-button-container">
                <Link href={`/question_4`} passHref>
                <button className="next-button">次へ</button>
                </Link>
            </div>
        </div>
    );
}

export default Question_3;
