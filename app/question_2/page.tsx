import Link from 'next/link';
const Question_2 = () => {
    return (
        <div className="question-container">
            <h1>会社の業種を教えてください</h1>
            <select>
                <option>製造業</option>
                <option>商社</option>
                <option>金融業</option>
                <option>IT業</option>
                <option>建設業</option>
            </select>
            
            <div className="next-button-container">
                <Link href={`/question_3`} passHref>
                <button className="next-button">次へ</button>
                </Link>
            </div>
        </div>
    );
}

export default Question_2;
