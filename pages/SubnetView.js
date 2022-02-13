import SubnetGrid from '../components/SubnetGrid'

export default function SubnetView() {
  return (
      <div>
        <div className='pane'>
         <SubnetGrid/>
        </div>

        <style jsx>{`
          .pane {
            /*
            width: 50%;
            justify-content: left;
            */
            align-items: center;
            display: flex;
          }
        }
      `}</style>
      </div>
      
  )
}
