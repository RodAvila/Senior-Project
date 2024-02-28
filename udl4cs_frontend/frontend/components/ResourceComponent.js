export default function Resource(props) {

    const {resourceId, resourceTitle, resourceDesc} = props;

    return (
        <div className="card">
            <div className="card-body">
                <h5 className="card-title">{resourceTitle}</h5>
                <p className="card-text">Resource Description: {resourceDesc}</p>
                <p className="card-text">Id: {resourceId}</p>
            </div>
        </div>
    )
}

// import React from 'react'
// import APIService from '../service/resourceservice'
//
//
// export default class ResourceComponent extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//             resources: []
//         }
//     }
//
//     componentDidMount() {
//         APIService.getAllResources().then((data)=> {
//             this.setState({ resources: data })
//             console.log(this.state.data)
//         })
//         .catch(function (ex) {
//             console.log('Response parsing failed. Error: ', ex);
//         });;
//     }
//
//     render() {
//         return (
//             <div>
//                 <h2 className="text-center">Resource Details</h2>
//                 <table className="table table-striped">
//                     <thead>
//                         <tr>
//                             <th>Resource Id</th>
//                             <th>Resource Title</th>
//                             <th>Resource Description</th>
//                         </tr>
//                     </thead>
//                     <tbody>
//                     {
//                         this.state.resources.map(resource =>
//                             <tr key={resource.id}>
//                                 <td>{resource.id}</td>
//                                 <td>{resource.resourceDesc}</td>
//                                 <td>{resource.resourceTitle}</td>
//                             </tr>
//                         )
//                     }
//                     </tbody>
//                 </table>
//             </div>
//         )
//     }
// }