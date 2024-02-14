import Account from '../../components/Account'
import Host from '../../components/Host'

function User() {
  return (
    <main className="main bg-dark">
      <div className="header">
        <h1>
          Welcome back
          <br />
          <Host />!
        </h1>
        <button className="edit-button">Edit Name</button>
      </div>
      <h2 className="sr-only">Accounts</h2>
      <Account
        accountTitle={'Argent Bank Checking'}
        accountNumber={8349}
        accountAmount={2082.79}
        accountDescription={'Available Balance'}
        accountCurrency={'$'}
      />
      <Account
        accountTitle={'Argent Bank Savings'}
        accountNumber={6712}
        accountAmount={10928.42}
        accountDescription={'Available Balance'}
        accountCurrency={'$'}
      />
      <Account
        accountTitle={'Argent Bank Credit Card'}
        accountNumber={8349}
        accountAmount={184.3}
        accountDescription={'Current Balance'}
        accountCurrency={'$'}
      />
    </main>
  )
}

export default User
