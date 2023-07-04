﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Migrations;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OfferApp.Infrastructure.Database;

#nullable disable

namespace OfferApp.Infrastructure.Database.Migrations
{
    [DbContext(typeof(OfferDbContext))]
    [Migration("20230704183529_CreateBidTable")]
    partial class CreateBidTable
    {
        /// <inheritdoc />
        protected override void BuildTargetModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "7.0.8")
                .HasAnnotation("Relational:MaxIdentifierLength", 64);

            modelBuilder.Entity("OfferApp.Core.Entities.Bid", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int")
                        .HasAnnotation("MySql:ValueGenerationStrategy", MySqlValueGenerationStrategy.IdentityColumn);

                    b.Property<int>("Count")
                        .HasColumnType("int");

                    b.Property<DateTime>("Created")
                        .HasColumnType("datetime(6)");

                    b.Property<string>("Description")
                        .IsRequired()
                        .HasMaxLength(3000)
                        .HasColumnType("varchar(3000)");

                    b.Property<decimal>("FirstPrice")
                        .HasPrecision(14, 4)
                        .HasColumnType("decimal(14,4)");

                    b.Property<decimal?>("LastPrice")
                        .HasPrecision(14, 4)
                        .HasColumnType("decimal(14,4)");

                    b.Property<string>("Name")
                        .IsRequired()
                        .HasMaxLength(150)
                        .HasColumnType("varchar(150)");

                    b.Property<bool>("Published")
                        .HasColumnType("tinyint(1)");

                    b.Property<DateTime?>("Updated")
                        .HasColumnType("datetime(6)");

                    b.HasKey("Id");

                    b.HasIndex("Name");

                    b.HasIndex("Updated");

                    b.ToTable("Bids");
                });
#pragma warning restore 612, 618
        }
    }
}
