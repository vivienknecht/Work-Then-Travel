using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace work_then_travel_api.Migrations
{
    /// <inheritdoc />
    public partial class AddAgencyTable : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Agency",
                columns: table => new
                {
                    ID = table.Column<Guid>(type: "uuid", nullable: false),
                    Name = table.Column<string>(type: "text", nullable: true),
                    EmailAddress = table.Column<string>(type: "text", nullable: true),
                    PhoneNumber = table.Column<string>(type: "text", nullable: true),
                    Address = table.Column<string>(type: "text", nullable: true),
                    YearOfFundation = table.Column<string>(type: "text", nullable: true),
                    NumberOfStudents = table.Column<string>(type: "text", nullable: true),
                    NumberOfLocations = table.Column<string>(type: "text", nullable: true),
                    WebsiteLink = table.Column<string>(type: "text", nullable: true),
                    Description = table.Column<string>(type: "text", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Agency", x => x.ID);
                });
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "Agency");
        }
    }
}
