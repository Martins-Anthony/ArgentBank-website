import Account from '../../components/Account'
import Header from '../../components/layout/Header'

function User() {
  return (
    <main className="main bg-dark">
      <Header />
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
