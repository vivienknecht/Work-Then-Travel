using System;
using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace work_then_travel_api.Migrations
{
    /// <inheritdoc />
    public partial class AddedNewColumnToReviews : Migration
    {
        /// <inheritdoc />
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.AddColumn<Guid>(
                name: "AgencyID",
                table: "Review",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));

            migrationBuilder.AddColumn<Guid>(
                name: "ProfiledID",
                table: "Review",
                type: "uuid",
                nullable: false,
                defaultValue: new Guid("00000000-0000-0000-0000-000000000000"));
        }

        /// <inheritdoc />
        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropColumn(
                name: "AgencyID",
                table: "Review");

            migrationBuilder.DropColumn(
                name: "ProfiledID",
                table: "Review");
        }
    }
}
