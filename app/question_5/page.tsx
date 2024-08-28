import Link from "next/link";

const Question_5 = () => {
    return (
        <div className="question-container">
            <h1>プランを選択してください</h1>
            <button>単発</button>
            <button>月３件</button>
            <button>月１０件</button>
            <button>1年契約</button>

            <div className="next-button-container">
                <Link href={`/result`} passHref>
                <button className="next-button">結果へ</button>
                </Link>
            </div>
        </div>
    );
}

export default Question_5;
