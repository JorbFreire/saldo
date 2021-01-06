import tag from '../../assets/icons/tag.svg';
import eye from '../../assets/icons/eye.svg';
import './styles.css';

export default function SubHeader() {
  const budgets = [
    {
      title: 'Principal',
      value: 'R$10.000,00',
      background: 'linear-gradient(89.96deg, #622EE5 0.06%, #172765 99.94%)'
    },
    {
      title: 'Aluguel',
      value: 'R$1.600,00',
      background: 'linear-gradient(135deg, #FF354E 0%, #172765 100%)'
    },
    {
      title: 'Alimentação',
      value: 'R$450,00',
      background: 'linear-gradient(135deg, #FF354E 0%, #172765 100%)'
    }
  ]
  return (
    <div className='subHeader'>
      <div className='iconBox'>
        <img src={tag} alt='tag'/>
      </div>

      <div className='iconBox'>
        <img src={tag} alt='tag'/>
      </div>
      {budgets.map( budget => (
        <section className='budgetBox'>
          <p
            className='budgetIconBox'
            style={{ background: budget.background }}
          >
            {budget.title[0]}
          </p>

          <section className='info'>
            <p> {budget.title} </p>
            <p className='money'> {budget.value} </p>
          </section>

          <img src={eye} alt='hide value'/>
        </section>
      ))}
    </div>
  )
}
