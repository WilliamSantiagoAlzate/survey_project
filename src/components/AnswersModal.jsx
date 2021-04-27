const AnswersModal = ({ answers }) => (
  <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
    <div className="modal-dialog">
      <div className="modal-content">
        <section className="modal-header">
          <h5 className="modal-title" id="exampleModalLabel">Answers</h5>
          <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </section>
        <section className="modal-body">
          {answers.map(answer => 
            <article className="border rounded px-2 py-2 mb-3" key={answer.id}>
              <p className="mb-0">{answer.answerDescription}</p>
            </article>
          )}
        </section>
        <section className="modal-footer">
          <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </section>
      </div>
    </div>
  </div>
);

export default AnswersModal;