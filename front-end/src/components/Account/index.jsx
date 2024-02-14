import PropTypes from 'prop-types'

function Account({
  accountTitle,
  accountNumber,
  accountAmount,
  accountDescription,
  accountCurrency,
}) {
  const amount = accountAmount
  const formattedNumberAmount = amount.toLocaleString('en-US', {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  })

  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">
          {accountTitle} (x{accountNumber})
        </h3>
        <p className="account-amount">
          {accountCurrency}
          {formattedNumberAmount}
        </p>
        <p className="account-amount-description">{accountDescription}</p>
      </div>
      <div className="account-content-wrapper cta">
        <button className="transaction-button">View transactions</button>
      </div>
    </section>
  )
}

Account.propTypes = {
  accountTitle: PropTypes.string.isRequired,
  accountNumber: PropTypes.number.isRequired,
  accountAmount: PropTypes.number.isRequired,
  accountDescription: PropTypes.string.isRequired,
  accountCurrency: PropTypes.string.isRequired,
}

export default Account
