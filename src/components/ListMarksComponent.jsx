// import React, { useEffect, useState } from 'react';
// import { listMarks, deleteMark } from '../services/MarkService';
// import { useNavigate } from 'react-router-dom';

// const ListMarksComponent = () => {
//     const [marks, setMarks] = useState([]);
//     const navigator = useNavigate();

//     useEffect(() => {
//         listMarks().then(res => setMarks(res.data)).catch(console.error);
//     }, []);

//     const goToAdd = () => navigator('/add-mark');
//     const goToEdit = (id) => navigator(`/edit-mark/${id}`);

//     return (
//         <div className='container mt-4'>
//             <h2 className='text-center mb-4'>📈 Marks</h2>
//             <button className='btn btn-primary mb-3' onClick={goToAdd}>➕ Add Marks</button>
//             <table className='table table-bordered shadow'>
//                 <thead className='table-dark'>
//                     <tr>
//                         <th>ID</th>
//                         <th>👨‍🎓 Student</th>
//                         <th>📚 Course</th>
//                         <th>📊 Score</th>
//                         <th>⚙️ Actions</th>
//                     </tr>
//                 </thead>
//                 <tbody>
//                     {marks.map(mark => (
//                         <tr key={mark.id}>
//                             <td>{mark.id}</td>
//                             <td>{mark.student?.firstName} {mark.student?.lastName}</td>
//                             <td>{mark.course?.courseName}</td>
//                             <td>{mark.score}</td>
//                             <td>
//                                 <button className='btn btn-info btn-sm me-2' onClick={() => goToEdit(mark.id)}>Update</button>
//                                 <button className='btn btn-danger btn-sm' onClick={() => {
//                                     if (window.confirm("Are you sure?")) {
//                                         deleteMark(mark.id).then(() => window.location.reload());
//                                     }
//                                 }}>Delete</button>
//                             </td>
//                         </tr>
//                     ))}
//                 </tbody>
//             </table>
//         </div>
//     );
// };

// export default ListMarksComponent;
import React, { useEffect, useState } from 'react';
import { listMarks, deleteMark } from '../services/MarkService';
import { useNavigate } from 'react-router-dom';

const ListMarksComponent = () => {
    const [marks, setMarks] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');
    const navigator = useNavigate();

    useEffect(() => {
        listMarks().then(res => setMarks(res.data)).catch(console.error);
    }, []);

    const goToAdd = () => navigator('/add-mark');
    const goToEdit = (id) => navigator(`/edit-mark/${id}`);

    const handleDelete = (id) => {
        if (window.confirm("Are you sure?")) {
            deleteMark(id).then(() => {
                setMarks(prev => prev.filter(mark => mark.id !== id));
            });
        }
    };

    const filteredMarks = marks.filter(mark => {
        const studentName = `${mark.student?.firstName || ''} ${mark.student?.lastName || ''}`.toLowerCase();
        const courseName = mark.course?.courseName?.toLowerCase() || '';
        const scoreStr = String(mark.score);

        return (
            studentName.includes(searchTerm.toLowerCase()) ||
            courseName.includes(searchTerm.toLowerCase()) ||
            scoreStr.includes(searchTerm)
        );
    });

    return (
        <div className='container mt-4'>
            <h2 className='text-center mb-4'>📈 Marks</h2>

            {/* 🔍 Search bar and Add button */}
            <div className="row mb-3">
                <div className="col-md-6">
                    <input
                        type="text"
                        className="form-control"
                        placeholder="🔍 Search by student name, course, or score..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                    />
                </div>
                <div className="col-md-6 text-end">
                    <button className='btn btn-primary' onClick={goToAdd}>➕ Add Marks</button>
                </div>
            </div>

            <table className='table table-bordered shadow'>
                <thead className='table-dark'>
                    <tr>
                        <th>ID</th>
                        <th>👨‍🎓 Student</th>
                        <th>📚 Course</th>
                        <th>📊 Score</th>
                        <th>⚙️ Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {filteredMarks.length > 0 ? (
                        filteredMarks.map(mark => (
                            <tr key={mark.id}>
                                <td>{mark.id}</td>
                                <td>{mark.student?.firstName} {mark.student?.lastName}</td>
                                <td>{mark.course?.courseName}</td>
                                <td>{mark.score}</td>
                                <td>
                                    <button className='btn btn-info btn-sm me-2' onClick={() => goToEdit(mark.id)}>Update</button>
                                    <button className='btn btn-danger btn-sm' onClick={() => handleDelete(mark.id)}>Delete</button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan="5" className="text-center">No matching records found.</td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    );
};

export default ListMarksComponent;
