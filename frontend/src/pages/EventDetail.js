import { Link, useParams } from "react-router-dom";

function EventDetailPage() {
  const params = useParams();

  return (
    <>
      <h1>Event Detail Page</h1>
      <p>Event ID: {params.eventId}</p>
      <p>
        <Link to=".." relative="path">
          Go Back
        </Link>
      </p>
    </>
  );
}

export default EventDetailPage;
