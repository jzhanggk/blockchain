import styles from '../styles/layout.module.css'
import Link from "next/link";
function Home() {
    return(

        <main className={styles.main}>

            <header className={styles.header}>
                <h1>My Tickets</h1>
            </header>

            <table className="table">

                <thead>
                <tr>
                    <th scope="col">#</th>
                    <th scope="col">Name</th>
                    <th scope="col">ID</th>
                    <th scope="col">Type</th>
                    <th scope="col">Status</th>
                    <th scope="col">Sell</th>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <th scope="row">1</th>
                    <td>Doge</td>
                    <td>1</td>
                    <td>Lottery</td>
                    <td>Used</td>
                    <td><button type="submit" className="btn btn-primary">Submit</button></td>
                </tr>
                <tr>
                    <th scope="row">2</th>
                    <td>Doge</td>
                    <td>1</td>
                    <td>Lottery</td>
                    <td>Used</td>
                    <td><button type="submit" className="btn btn-primary">Submit</button></td>
                </tr>
                <tr>
                    <th scope="row">3</th>
                    <td>Doge</td>
                    <td>1</td>
                    <td>Lottery</td>
                    <td>Used</td>
                    <td><button type="submit" className="btn btn-primary">Submit</button></td>
                </tr>
                </tbody>
            </table>
            <h2>
                <Link href="/main">
                    <a>Back to home</a>
                </Link>
            </h2>
            {/*</div>*/}
        </main>
    )



}
export default Home