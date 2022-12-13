export const userColumns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "user",
    headerName: "User",
    width: 230,
    renderCell: (params) => {
      return (
        <div className="cellWithImg">
          <img className="cellImg" src={params.row.img} alt="avatar" />
          {params.row.username}
        </div>
      );
    },
  },
  {
    field: "email",
    headerName: "Email",
    width: 230,
  },
  {
    field: "address",
    headerName: "Address",
    width: 100,
  },
  {
    field: "phone",
    headerName: "Phone",
    width: 160,
  },
];

export const productsColumns = [
  { field: "id", headerName: "ID", width: 70 },

  {
    field: "title",
    headerName: "Product Name",
    width: 230,
  },
  {
    field: "price",
    headerName: "Price",
    width: 230,
  },
  {
    field: "status",
    headerName: "Status",
    width: 100,
  },
];
