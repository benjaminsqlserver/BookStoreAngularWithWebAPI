USE [master]
GO
/****** Object:  Database [MyBookStoreDB]    Script Date: 07/05/2022 4:39:00 PM ******/
CREATE DATABASE [MyBookStoreDB]
 
GO

USE [MyBookStoreDB]
GO
/****** Object:  Table [dbo].[Books]    Script Date: 07/05/2022 4:39:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Books](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](150) NOT NULL,
	[Author] [nvarchar](150) NOT NULL,
	[Description] [nvarchar](max) NOT NULL,
	[Value] [decimal](18, 2) NOT NULL,
	[PublishDate] [datetime] NOT NULL,
	[CategoryId] [int] NOT NULL,
 CONSTRAINT [PK_Books] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY] TEXTIMAGE_ON [PRIMARY]
GO
/****** Object:  Table [dbo].[Categories]    Script Date: 07/05/2022 4:39:00 PM ******/
SET ANSI_NULLS ON
GO
SET QUOTED_IDENTIFIER ON
GO
CREATE TABLE [dbo].[Categories](
	[Id] [int] IDENTITY(1,1) NOT NULL,
	[Name] [nvarchar](50) NOT NULL,
 CONSTRAINT [PK_Categories] PRIMARY KEY CLUSTERED 
(
	[Id] ASC
)WITH (PAD_INDEX = OFF, STATISTICS_NORECOMPUTE = OFF, IGNORE_DUP_KEY = OFF, ALLOW_ROW_LOCKS = ON, ALLOW_PAGE_LOCKS = ON, OPTIMIZE_FOR_SEQUENTIAL_KEY = OFF) ON [PRIMARY]
) ON [PRIMARY]
GO
SET IDENTITY_INSERT [dbo].[Books] ON 
GO
INSERT [dbo].[Books] ([Id], [Name], [Author], [Description], [Value], [PublishDate], [CategoryId]) VALUES (1, N'Introduction To Jazz Keyboard', N'Benjamin Olumuyiwa Fadina', N'Jazz Music', CAST(1000.99 AS Decimal(18, 2)), CAST(N'2022-05-07T11:48:21.730' AS DateTime), 1)
GO
INSERT [dbo].[Books] ([Id], [Name], [Author], [Description], [Value], [PublishDate], [CategoryId]) VALUES (3, N'Tales By Moonlight', N'Amos Kayode Akinola', N'Children Story Book', CAST(777.77 AS Decimal(18, 2)), CAST(N'2021-05-24T23:00:00.000' AS DateTime), 2)
GO
SET IDENTITY_INSERT [dbo].[Books] OFF
GO
SET IDENTITY_INSERT [dbo].[Categories] ON 
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (1, N'Jazz Music')
GO
INSERT [dbo].[Categories] ([Id], [Name]) VALUES (2, N'Folklore')
GO
SET IDENTITY_INSERT [dbo].[Categories] OFF
GO
ALTER TABLE [dbo].[Books]  WITH CHECK ADD  CONSTRAINT [FK_Books_Categories] FOREIGN KEY([CategoryId])
REFERENCES [dbo].[Categories] ([Id])
GO
ALTER TABLE [dbo].[Books] CHECK CONSTRAINT [FK_Books_Categories]
GO
USE [master]
GO
ALTER DATABASE [MyBookStoreDB] SET  READ_WRITE 
GO
